import "../App.css";

//https://developer.mozilla.org/ko/docs/Web/API/notification
const useNotification = (title, options) => {
    if (!("Notification" in window)) {
        return;
    }
    const fireNotif = () => {
        if(Notification.permission !== "granted"){
           Notification.requestPermission().then(permission => {
            if(permission === "granted"){
                new Notification(title, options);
            } else {
                return;
            }
           })

        }else {
            new Notification(title, options);
        }
    }
    return fireNotif;
}
const UseNotificationApp = () => {
    const triggerNotif = useNotification("Can I love you?", {body: "I love you"});
    return (
        <div className="App">
            <button onClick={triggerNotif}>Hello!</button>
        </div>
  );
};

export default UseNotificationApp;