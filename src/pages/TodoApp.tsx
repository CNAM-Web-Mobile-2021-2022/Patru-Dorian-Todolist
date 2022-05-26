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
  IonBadge,
  IonCheckbox,
} from "@ionic/react";
import { useState } from "react";
import { useTodoList } from "../components/useTodoList";
import "./TodoApp.css";

export default TodoApp;

export function TodoApp() {
  const [TodoNew, setNewTodo] = useState("");
  const { list, TodoAdd } = useTodoList();
  const remainingTasksNumber = list.filter((item) => !item.done).length;
  const seeTodoList = list;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonSegment
            onIonChange={(e) => console.log("Segment selected", e.detail.value)}
          >
            <IonSegmentButton value="afaire">
              <IonLabel>
                À faire
                {remainingTasksNumber ? (
                  <IonBadge>{remainingTasksNumber}</IonBadge>
                ) : null}
              </IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="tout">
              <IonLabel>Tout</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonList>
          {!remainingTasksNumber && (
            <IonItem>
              <p>Votre liste est vide, bravo !</p>
            </IonItem>
          )}
          {seeTodoList.map((todoItem) => {
            return (
              <TodoEvents
                key={todoItem.id}
                text={todoItem.text}
                done={todoItem.done}
              />
            );
          })}
        </IonList>
      </IonContent>

      <IonFooter>
        <form
          onSubmit={(event) => {
            TodoAdd(TodoNew);
            setNewTodo("");
            event.preventDefault();
          }}
        >
          <IonItem>
            <IonInput
              onInput={(event) => setNewTodo((event.target as any).value)}
              placeholder="Qu'avez-vous en tête ?"
              value={TodoNew}
              clearInput
            />
            <IonButton type="submit" disabled={!TodoNew}>
              Créer
            </IonButton>
          </IonItem>
        </form>
      </IonFooter>
    </IonPage>
  );
}

export function TodoEvents(props) {
  const { text, done, onChange } = props;

  return (
    <IonItem className={`todo-item ${done ? "-checked" : ""}`}>
      <IonCheckbox
        slot="start"
        checked={done}
        onIonChange={() => onChange({ done: !done })}
      />
      <IonLabel onClick={() => onChange({ done: !done })}>{text}</IonLabel>
    </IonItem>
  );
}
