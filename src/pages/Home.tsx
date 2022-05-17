import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButton,
  IonLabel,
  IonItem,
  IonList,
  IonSegment,
  IonSegmentButton,
  IonFooter,
  IonInput,
  //IonBadge,
} from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
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
        </IonToolbar>
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

      <IonFooter>
        <IonItem>
          <IonInput
            value="nouvelletache"
            placeholder="Qu'avez-vous en tête ?"
            clearInput
          />
          <IonButton type="submit">Créer</IonButton>
        </IonItem>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
