

Java.perform(function () 
{
    var Activity = Java.use("android.app.Activity");


    var _wifiManager = Java.use("android.net.wifi.WifiManager"); //bu _wifiManager classi
    var _context = Java.use("android.content.Context"); //context classı

    Activity.onResume.implementation = function () 
    {
  		var wifiManager = Java.cast( this.getSystemService("wifi"),_wifiManager);

      console.log ("Wifi Manager: " + wifiManager);
     
      if(wifiManager === null)
        console.log("wifi not supported.");

      try
      {
  		  var wifiStat = wifiManager.isWifiEnabled();
  		  console.log("Currently wifi is "+wifiStat);
      }
      catch(Error)
      {
        console.log(Error);
      }

    try
		{
      if (wifiStat)
			 wifiManager.setWifiEnabled(false);
	 	  else
			 wifiManager.setWifiEnabled(true);

      var wifiStatAfter = wifiManager.isWifiEnabled();
      console.log("Currently wifi is " + wifiStatAfter);
    }

    catch(Error)
    {
      console.log(Error);
    }

  		this.onResume();
	} 

});