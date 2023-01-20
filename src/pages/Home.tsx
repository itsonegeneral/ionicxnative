import MessageListItem from '../components/MessageListItem';
import { SyntheticEvent, useState } from 'react';
import { Message, getMessages } from '../data/messages';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';

import { Plugins } from '@capacitor/core';
const { CalculationPlugin } = Plugins;
var data= {};
const Home: React.FC = () => {
  const [msgs, setMessages] = useState<any>([]);
  const [first,setFirst] = useState<number>(0);
  const [second,setSecond] = useState<number>(0);
  const [result,setResult] = useState<number>(0);

  useIonViewWillEnter( async () => {
    CalculationPlugin.getCalculation().then((result : any) => {
      console.log("Result " + result["result"]);
      setMessages(result["result"]);
      data = result
    }).catch((err: any) => {
      console.log();
    });;
    //console.log(msgs.data);
    //setMessages(msgs);
  });

  function findSum(){
    console.log("Summed " + second)
    CalculationPlugin.getSum({first,second}).then((result : any)=>{
      console.log("Summed " + result["result"])
      setResult(result["result"]);
    }).catch((err:any)=>{

    });
  }

    return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Native Integration POC </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        Demo Calculator with Native{'\n'}<br></br><br></br>
        First Value : {first} {'\n'}<br></br>
        Second Value : {second}{'\n'} <br></br>
       <br></br><br></br>
        <IonInput type='number' placeholder='First Number' onInput={(e:any)=>setFirst(e.target.value)}/>
        <IonInput type='number' placeholder='Second Number'onInput={(e:any)=>setSecond(e.target.value)}/>
        <IonButton onClick={findSum}>Find Sum</IonButton><br></br>
        Result = {result} <br></br>
        Message From Native Code <b> {msgs}</b>
      </IonContent>
    </IonPage>
  );
};

export default Home;
