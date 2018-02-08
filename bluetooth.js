
/*
Permissions required:
<uses-permission android:name="android.permission.BLUETOOTH"/>
<uses-permission android:name="android.permission.BLUETOOTH_ADMIN"/>

*/

Java.perform(function () {
    
    var Activity = Java.use("android.app.Activity");
    var _bluetoothAdapter = Java.use("android.bluetooth.BluetoothAdapter");
    
    Activity.onResume.implementation = function () 
    {

    	if (!_bluetoothAdapter.getDefaultAdapter()) 
    	{
    		console.log("bluetooth not supported");
    	}


    	else
    	{

    		var mBluetoothAdapter = Java.cast(_bluetoothAdapter.getDefaultAdapter(),_bluetoothAdapter);


    		var isEnabled = mBluetoothAdapter.isEnabled();


    		if (isEnabled)
    			mBluetoothAdapter.disable();
   	 		else
    			mBluetoothAdapter.enable();
    	}
        
        this.onResume();
   };

});

