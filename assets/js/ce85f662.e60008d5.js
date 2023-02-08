"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[716],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>E});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),s=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(o.Provider,{value:e},t.children)},m="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),m=s(n),u=r,E=m["".concat(o,".").concat(u)]||m[u]||h[u]||i;return n?a.createElement(E,l(l({ref:e},p),{},{components:n})):a.createElement(E,l({ref:e},p))}));function E(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=u;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d[m]="string"==typeof t?t:r,l[1]=d;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9195:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3,title:"Permissions"},l="Permissions",d={unversionedId:"permissions",id:"permissions",title:"Permissions",description:"Setting up permissions",source:"@site/docs/permissions.md",sourceDirName:".",slug:"/permissions",permalink:"/react-native-health-connect/docs/permissions",draft:!1,editUrl:"https://github.com/matinzd/react-native-health-connect/tree/main/docs/docs/permissions.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Permissions"},sidebar:"tutorialSidebar",previous:{title:"Get started",permalink:"/react-native-health-connect/docs/get-started"},next:{title:"API Reference",permalink:"/react-native-health-connect/docs/category/api-reference"}},o={},s=[{value:"Setting up permissions",id:"setting-up-permissions",level:2},{value:"Complete list of permissions",id:"complete-list-of-permissions",level:2}],p={toc:s};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"permissions"},"Permissions"),(0,r.kt)("h2",{id:"setting-up-permissions"},"Setting up permissions"),(0,r.kt)("p",null,"To access health data from the Health Connect app in your own app, you need to add the necessary permissions and filters to the app manifest."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add the necessary permissions to ",(0,r.kt)("inlineCode",{parentName:"li"},"AndroidManifest.xml"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="android/src/main/AndroidManifest.xml"',title:'"android/src/main/AndroidManifest.xml"'},'<manifest xmlns:android="http://schemas.android.com/apk/res/android">\n    <uses-permission android:name="android.permission.INTERNET" />\n+   <uses-permission android:name="android.permission.health.READ_HEART_RATE"/>\n+   <uses-permission android:name="android.permission.health.WRITE_HEART_RATE"/>\n+   <uses-permission android:name="android.permission.health.READ_STEPS"/>\n+   <uses-permission android:name="android.permission.health.WRITE_STEPS"/>\n</manifest>\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add the following highlighted code inside the activity tag as well:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="android/src/main/AndroidManifest.xml"',title:'"android/src/main/AndroidManifest.xml"'},'    <activity\n      android:name=".MainActivity"\n      android:label="@string/app_name"\n      android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode"\n      android:launchMode="singleTask"\n      android:windowSoftInputMode="adjustResize"\n      android:exported="true">\n      <intent-filter>\n          <action android:name="android.intent.action.MAIN" />\n          <category android:name="android.intent.category.LAUNCHER" />\n      </intent-filter>\n      // highlight-start\n+     <intent-filter>\n+       <action android:name="androidx.health.ACTION_SHOW_PERMISSIONS_RATIONALE" />\n+     </intent-filter>\n      // highlight-end\n    </activity>\n')),(0,r.kt)("h2",{id:"complete-list-of-permissions"},"Complete list of permissions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Record class type"),(0,r.kt)("th",{parentName:"tr",align:null},"Read permission declaration"),(0,r.kt)("th",{parentName:"tr",align:null},"Write permission declaration"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ActiveCaloriesBurned"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_ACTIVE_CALORIES_BURNED"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_ACTIVE_CALORIES_BURNED")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BasalBodyTemperature"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_BASAL_BODY_TEMPERATURE"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_BASAL_BODY_TEMPERATURE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BasalMetabolicRate"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_BASAL_METABOLIC_RATE"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_BASAL_METABOLIC_RATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BloodGlucose"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_BLOOD_GLUCOSE"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_BLOOD_GLUCOSE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BloodPressure"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_BLOOD_PRESSURE"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_BLOOD_PRESSURE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BodyFat"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_BODY_FAT"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_BODY_FAT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BodyTemperature"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_BODY_TEMPERATURE"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_BODY_TEMPERATURE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BoneMass"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_BONE_MASS"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_BONE_MASS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CervicalMucus"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_CERVICAL_MUCUS"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_CERVICAL_MUCUS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CyclingPedalingCadence"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_EXERCISE"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_EXERCISE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Distance"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_DISTANCE"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_DISTANCE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ElevationGained"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_ELEVATION_GAINED"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_ELEVATION_GAINED")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ExerciseSession"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_EXERCISE"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_EXERCISE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FloorsClimbed"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_FLOORS_CLIMBED"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_FLOORS_CLIMBED")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HeartRate"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_HEART_RATE"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_HEART_RATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Height"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_HEIGHT"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_HEIGHT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hydration"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_HYDRATION"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_HYDRATION")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LeanBodyMass"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_LEAN_BODY_MASS"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_LEAN_BODY_MASS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MenstruationFlow"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_MENSTRUATION"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_MENSTRUATION")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MenstruationPeriod"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_MENSTRUATION"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_MENSTRUATION")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nutrition"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_NUTRITION"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_NUTRITION")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OvulationTest"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_OVULATION_TEST"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_OVULATION_TEST")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OxygenSaturation"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_OXYGEN_SATURATION"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_OXYGEN_SATURATION")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Power"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_POWER"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_POWER")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RespiratoryRate"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_RESPIRATORY_RATE"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_RESPIRATORY_RATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RestingHeartRate"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_RESTING_HEART_RATE"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_RESTING_HEART_RATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SexualActivity"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_SEXUAL_ACTIVITY"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_SEXUAL_ACTIVITY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SleepSession"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_SLEEP"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_SLEEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SleepStage"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_SLEEP"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_SLEEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Speed"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_SPEED"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_SPEED")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"StepsCadence"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_STEPS"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_STEPS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Steps"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_STEPS"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_STEPS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TotalCaloriesBurned"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_TOTAL_CALORIES_BURNED"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_TOTAL_CALORIES_BURNED")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Vo2Max"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_VO2_MAX"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_VO2_MAX")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Weight"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_WEIGHT"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_WEIGHT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WheelchairPushes"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.READ_WHEELCHAIR_PUSHES"),(0,r.kt)("td",{parentName:"tr",align:null},"android.permission.health.WRITE_WHEELCHAIR_PUSHES")))),(0,r.kt)("p",null,"You can read more about data types and permissions ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/health-and-fitness/health-connect/data-and-data-types/data-types"},"here"),"."))}m.isMDXComponent=!0}}]);