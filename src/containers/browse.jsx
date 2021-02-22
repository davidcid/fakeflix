import { SelectProfileContainer } from "./profiles";
import { FirebaseContext } from "../context/firebase";
import { useContext, useEffect, useState } from "react";

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return <SelectProfileContainer user={user} setProfile={setProfile} />;
}
