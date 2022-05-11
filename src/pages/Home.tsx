import {
  IonContent,
  IonHeader,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonList,
  IonItem,
  IonInput
} from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonSegment
          mode="ios"
          onIonChange={(e) => console.log("Segment selected", e.detail.value)}
        >
          <IonSegmentButton value="afaire">
            <IonLabel>À faire</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="tous">
            <IonLabel>Tous</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem>
            <IonLabel>Pokémon Yellow</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Mega Man X</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>The Legend of Zelda</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Pac-Man</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Super Mario World</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
      <footer>
        <IonItem>
          <IonInput
            /*value={text}*/
            placeholder="Entrer une tâche"
            /*onIonChange={(e) => setText(e.detail.value!)}*/
            clearInput
          ></IonInput>
        </IonItem>
      </footer>
    </IonPage>
  );
};

export default Home;
