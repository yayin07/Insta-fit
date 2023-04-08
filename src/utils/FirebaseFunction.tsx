import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "../../Firebase.config";

export const saveItem = async ({ data }: any) => {
  await setDoc(doc(db, "users", `${Date.now()}`), data, {
    merge: true,
  });
};

export const getAllUserData = async ({ data }: any) => {
  const info = await getDocs(
    query(collection(db, "users"), orderBy("id", "desc"))
  );
  return info.docs.map((doc) => {
    doc.data();
  });
};
