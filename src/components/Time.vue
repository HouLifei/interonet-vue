<template>
  <div class="div-content">
    <h3>Time</h3>
    <div>
      <div class="set-time">
        <div class="time">
          <label for="startTime">Start Time</label>
          <input type="datetime-local" id="startTime" name="startTime"/>
        </div>
        <div class="time">
          <label for="startTime">End Time</label>
          <input type="datetime-local" id="endTime" name="endTime"/>
        </div>
      </div>
      <div class="show-time">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'time',
  data: function () {
    return {
      startTime: '',
      endTime: ''
    }
  }
}
</script>

<style scoped>
  div.set-time{
    padding: 10px 15px;
    width: 300px;
    display: inline-block;
  }
  div.show-time{
    display: inline-block;
  }
  label
  {
    width: 25%;
    display: inline-block;
    line-height: 50px;
  }
  input
  {
    width: 70%;
    height: 30px;
    display: inline-block;
  }
</style>
