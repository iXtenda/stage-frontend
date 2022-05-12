<!-- ---
title: iVP Stage API Documentation
fontfamily: arev
header-includes:
    - \usepackage{setspace}
    - \doublespacing
urlcolor: cyan
--- -->

JavaScript modules for interacting with iVP Stage based showrooms.

## Overview

We are using the Furioos Unity SDK to communicate between the VM and the front end. To be able send requests to the VM and receive requests/responses from the VM use the [Furioos JS SDK](https://github.com/Unity-Technologies/furioos-sdk-js). See the Furioos JS SDK documentation on how to [instantiate the player](https://github.com/Unity-Technologies/furioos-sdk-js#constructorsdksharelinkid-containerdivid-options). You can use ``Player.start(location)`` to start the VM.  
All requests to the VM are done by sending a valid json string via ``sendSDKMessage(data)``. Requests/responses from the VM can be received by listening to ``onSDKMessage(function(data) {})``.

All json strings consist out of two parameters: ``"endPoint"`` (string), which determines which action the back end should perform and ``"payload"`` (object) specifying which data is sent to the endpoint.

## Selecting

### endPoint
``"Select"``

### payload
**Uid**: The Uid of the machine that will be selected.

**Example**

```json
{
    "endPoint": "Select",
    "payload": {
        "Uid": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
    }
}
```
