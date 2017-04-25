<template>
  <div class="div-content">
    <h3>Topology</h3>
    <div class="edit-topology">
      <show-model v-if="showModel" v-bind:type="type" v-on:ensure="ensure" v-on:cancel="cancel" v-bind:deviceName="deviceName">
        <template slot="typeOption" v-if="type === 'Switch'">
          <option value="default" selected="selected">Default</option>
          <option value="ons">ONetSwitch</option>
          <option value="ovs">OpenSwitch</option>
        </template>
        <template slot="typeOption"  v-if="type === 'Host'">
          <option value="default" selected="selected">Default</option>
          <option value="ubuntu">Ubuntu</option>
          <option value="windows">Windows</option>
        </template>
      </show-model>
      <div class="btn-group">
        <button class="btn-lg blue" v-on:click="add('Switch')">Add Switch</button>
      </div>
      <div class="btn-group">
        <button class="btn-lg green" v-on:click="add('Host')">Add Host</button>
      </div>
      <div class="btn-group">
        <button class="btn-lg red" v-on:click="reset">Reset</button>
      </div>
    </div>
    <div class="show-topology">
      <div>
        <button class="btn-sm red" v-on:click="editEdge('delete')">Delete Link</button>
        <button class="btn-sm blue" v-on:click="editEdge('add')">Add Link</button>
      </div>
      <div ref="topology" id="topoloy"></div>
    </div>

  </div>
</template>

<script>
import d3 from 'd3'
import model from '@/components/Model'
let force = d3.layout.force().size([800, 400]).linkDistance(150).charge(-500);
let selectedNodes = [];
force.on("tick", function () {
  let nodes = d3.selectAll('.node');
  let edges = d3.selectAll('line');
  nodes.attr({
    "cx": function (d) {
      return d.x;
    },
    "cy": function (d) {
      return d.y;
    },
    "transform": function (d) {
      return "translate(" + d.x + "," + d.y + ")";
    }
  });
  edges.attr("x1", function (d) {
    return d.source.x;
  })
    .attr("y1", function (d) {
      return d.source.y;
    })
    .attr("x2", function (d) {
      return d.target.x;
    })
    .attr("y2", function (d) {
      return d.target.y;
    });



});
export default {
  name: 'topology',
  components: {
    'show-model': model
  },
  data: function () {
    return {
      switchNum: 0,
      hostNum: 0,
      switchNodes: {},
      hostNodes: {},
      nodes: [],
      edges: [],
      showModel: false,
      type: 'Switch'
    }
  },
  mounted: function () {
    this.init(this.$refs.topology);
  },
  methods: {
    init: function (id) {
      let svg = d3.select(id).append("svg").attr("width",800).attr("height",400);
    },
    add: function (type) {
      if(type == 'Switch'){
        this.type = 'Switch';
        this.deviceName = 's' + this.switchNum;
      }
      else{
        this.type = 'Host';
        this.deviceName = 'h' + this.hostNum;
      }
      this.showModel = true;

    },
    reset: function () {
      this.switchNodes = {};
      this.hostNodes = {};
      this.nodes = [];
      selectedNodes = [];
      this.updateNode();

    },
    ensure: function (type, deviceName, deviceType) {
      if( type == 'Switch' ){
        this.switchNodes[deviceName] = { type: deviceType };
        this.nodes.push({ name: deviceName, type: 'Switch'});
        this.switchNum++;
      }
      else if( type == 'Host'){
        this.hostNodes[deviceName] = {type: deviceType};
        this.nodes.push( { name: deviceName, type: 'Host'});
        this.hostNum++;
      }
      this.showModel = false;
      this.updateNode();
    },
    cancel: function (type, deviceName, deviceType) {
      this.showModel = false;
    },
    updateNode: function () {
      force.nodes(this.nodes);
      force.start();
      let svg = d3.select('svg');
      let nodes = svg.selectAll(".node").data(this.nodes);
      nodes.enter().append("g").attr({
          "class": "node",
          "cx": function (d) {
            return d.x;
          },
          "cy": function (d) {
            return d.y;
          }
        })
        .on('click', function (d) {
          if( this.style.opacity != 0.3){
            this.style.opacity = 0.3;
            selectedNodes.push(d)
          }
          else{
            this.style.opacity = 1;
            selectedNodes.splice(selectedNodes.indexOf(d),1);
          }
          console.log(selectedNodes);
        })
        .call(force.drag);
      nodes.append("image").attr({
          "xlink:href": function (d) {
            if (d.type == "Switch") return require("../assets/image/switch.png");
            else return require("../assets/image/host.png");
          },
          "height": 40,
          "width": 40,
          "x": -20,
          "y": -20
        });
      nodes.append("text")
        .attr({
          "y": 20,
          "text-anchor": "middle"
        })
        .text(function (d) {
         return d.name
        })
        .style({
          "fill": "#000",
          "font-size": "10px"
        });
      nodes.exit().remove();
    },
    editEdge: function (operate) {
      if(selectedNodes.length != 2){
        alert('Please select two nodes to edit edge')
      }
      else{
        let svg = d3.select('svg');
        svg.selectAll(".node").style('opacity',1);
        let source = this.nodes.indexOf(selectedNodes[0]);
        let target = this.nodes.indexOf(selectedNodes[1]);
        selectedNodes = [];
        console.log(this.edges);
        if( operate == 'add'){
          for(let i = 0; i < this.edges.length; i++){
            if( (this.edges[i].source.index == source && this.edges[i].target.index == target) || (this.edges[i].source.index == target && this.edges[i].target.index == source )){
              return;
            }
          }
          this.edges.push({source, target});
        }
        else {
          for(let i = 0; i < this.edges.length; i++){
            if( (this.edges[i].source.index == source && this.edges[i].target.index == target) || (this.edges[i].source.index == target && this.edges[i].target.index == source )){
              this.edges.splice(i,1);
              break;
            }
          }
        }
        force.links(this.edges);
        force.start();
        let edges = svg.selectAll("line").data(this.edges);
        edges.enter().append("line").style("stroke", "#000").style("stroke-width", 1);
        edges.exit().remove();

      }
    }

//    showTopology: function (id) {
//
//      var nodes = [ { name: "桂林"    }, { name: "广州" },
//        { name: "厦门"    }, { name: "杭州"   },
//        { name: "上海"   }, { name: "青岛"    },
//        { name: "天津"    } ];
//
//      var edges = [{ source : 0 , target: 2 } ];
//
//      var width = 400;
//      var height = 400;
//
//
//      var svg = d3.select(id)
//        .append("svg")
//        .attr("width",width)
//        .attr("height",height);
//
//      var force = d3.layout.force()
//        .nodes(nodes)		//指定节点数组
//        .links(edges)		//指定连线数组
//        .size([width,height])	//指定范围
//        .linkDistance(150)	//指定连线长度
//        .charge(-400);	//相互之间的作用力
//
//      force.start();	//开始作用
//
//      console.log(nodes);
//      console.log(edges);
//
//
////      添加连线
//      var svg_edges = svg.selectAll("line")
//        .data(edges)
//        .enter()
//        .append("line")
//        .style("stroke","#ccc")
//        .style("stroke-width",1);
//
//      var color = d3.scale.category20();
//
//      //添加节点
//      var svg_nodes = svg.selectAll("circle").data(nodes);
//      svg_nodes.enter()
//        .append("circle")
//        .attr("r",20)
//        .style("fill",function(d,i){
//          return color(i);
//        })
//        .call(force.drag)
//      svg_nodes.attr("r",20)
//        .style("fill",function(d,i){
//          return color(i);
//        })
//        .call(force.drag)
//
//      svg_nodes.exit().remove();
//
//
////      nodes.push( { name: "南京" } );
////      force.nodes(nodes);
////      force.start();
////      console.log(nodes);
////
////      console.log(svg_nodes)
//
////      svg_nodes = svg.selectAll("circle").data(nodes);
////      svg_nodes.enter()
////        .append("circle")
////        .attr("r",20)
////        .style("fill",function(d,i){
////          return color(i);
////        })
////        .call(force.drag)
////      svg_nodes.attr("r",20)
////        .style("fill",function(d,i){
////          return color(i);
////        })
////        .call(force.drag)
////
////      svg_nodes.exit().remove();
//      edges.push( { source : 0 , target: 1 } );
//      force.links(edges);
//      force.start();
//      console.log(edges);
//
//      console.log(svg_edges)
//
//      svg_edges = svg.selectAll("line").data(edges);
//      svg_edges.enter()
//        .append("line")
//        .style("stroke","#ccc")
//        .style("stroke-width",1);
//
//      svg_edges.exit().remove();
//
//
//      force.on("tick", function(){	//对于每一个时间间隔
//
//        //更新连线坐标
//        svg_edges.attr("x1",function(d){ return d.source.x; })
//          .attr("y1",function(d){ return d.source.y; })
//          .attr("x2",function(d){ return d.target.x; })
//          .attr("y2",function(d){ return d.target.y; });
//
//        //更新节点坐标
//        svg_nodes.attr("cx",function(d){ return d.x; })
//          .attr("cy",function(d){ return d.y; });
//
//      });
//
//
//    }
  }
}
</script>

<style scoped>
  div.edit-topology {
    float: left;
    width: 20%;
    height: 200px;
  }
  div.show-topology {
    float: left;
    width: 80%;
    height: 600px;
  }
  div.btn-group {
    margin: 30px 0;
  }
  button {
    border-radius: 2px ;
    text-align: center;
    color: #FFF;
  }
  button.btn-lg {
    line-height: 40px;
    height: 40px;
    width: 140px;
    padding: 0 20px;
    margin: 10px;
    font-size: 15px;
  }
  button.btn-sm {
    line-height: 20px;
    width: 100px;
    font-size: 10px;
    padding: 0 10px;
    float: right;
    margin: 5px;
  }
  button.blue {
    background-color: #4cb0f9;
    border: 1px solid #4cb0f9;
  }
  button.green {
    background-color: #b9e563;
    border: 1px solid #b9e563;
  }
  button.red {
    background-color: #FF4351;
    border: 1px solid #FF4351;
  }
</style>
