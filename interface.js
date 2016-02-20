$(document).ready(function() {
  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.temperature);
  $('#power-saving-status').text(_updatePowerSavingModeStatus());
  $('#temperature').css("background-color", "yellow");

  $('#Increase-temperature').click(function() {
    thermostat.increaseTemperature();
    $('#temperature').text(thermostat.temperature);
    $('#temperature').css("background-color", thermostat.colour);
  });
  $('#Decrease-temperature').click(function(){
    thermostat.decreaseTemperature();
    $('#temperature').text(thermostat.temperature);
    $('#temperature').css("background-color", thermostat.colour);
  });

  $('#Power-Saving-Mode-On').click(function(){
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text(_updatePowerSavingModeStatus());
  });
  $('#Power-Saving-Mode-Off').click(function(){
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text(_updatePowerSavingModeStatus());
  });
  $('#Reset-Temperature').click(function(){
    thermostat.resetTemperature();
    $('#temperature').text(thermostat.temperature);
    $('#temperature').css("background-color", thermostat.colour);
  });

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=44db6a862fba0b067b1930da0d769e98&units=metric', function(response) {
    $('#realtime_weather').text('Current temperature in London: ' + response.main.temp + 'C');
  });
  //});


  function _updatePowerSavingModeStatus() {
    return thermostat.powerSavingMode ? "on" : "off";
  };

});
