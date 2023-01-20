package com.demo.trial;

import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin
public class CalculationPlugin extends Plugin {

    private static final String TAG = "CalculationPlugin";

    @PluginMethod()
    public void getCalculation(PluginCall call) {
        JSObject object = new JSObject();
        object.put("result", 250);
        Log.d(TAG, "getCalculation: Called inside java");
        call.resolve(object);
    }

    @PluginMethod
    public void getSum(PluginCall call) {
        JSObject object = new JSObject();
        int first = Integer.parseInt(call.getString("first"));
        int second = Integer.parseInt(call.getString("second"));
        Log.d(TAG, "getSum: " + first + " second " + second);
        object.put("result", first + second);
        call.resolve(object);

    }

}
