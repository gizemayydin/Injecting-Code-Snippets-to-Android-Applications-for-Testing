This project focuses on rotating the screen, switching Bluetooth and Wi-Fi on/off
programmatically, and injecting these JavaScript code snippets to Android Applications using Frida,
a dynamic code instrumentation tool, so that Android developers can use these test cases in each step of their 
test. 

To use these codes, Frida must be installed in the computer, and an appropriate version of Frida-Server
must be pushed into the emulator/phone. Frida-Server should be executable by the root and must be running in
the emulator/phone before the injection. After that, "frida -U -l filename.js processname" can be executed
in the command prompt to inject filename.js to the process having processname. For details, visit the documentation of Frida.

