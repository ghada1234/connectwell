import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, getDoc } from 'firebase/firestore';
import { db } from './firebase';
import { Therapist } from './types';

// Admin email list (you can add more admins here)
const ADMIN_EMAILS = [
  'ghadaabdulaziz1@gmail.com',
  'admin@connectwell.com'
];

export function isAdmin(email: string | null): boolean {
  return email ? ADMIN_EMAILS.includes(email.toLowerCase()) : false;
}

// Add new therapist
export async function addTherapist(therapistData: Omit<Therapist, 'id'>): Promise<string> {
  if (!db) throw new Error('Database not initialized');
  
  try {
    const docRef = await addDoc(collection(db, 'therapists'), {
      ...therapistData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return docRef.id;
  } catch (error: any) {
    throw new Error('Failed to add therapist: ' + error.message);
  }
}

// Update therapist
export async function updateTherapist(id: string, therapistData: Partial<Therapist>): Promise<void> {
  if (!db) throw new Error('Database not initialized');
  
  try {
    const therapistRef = doc(db, 'therapists', id);
    await updateDoc(therapistRef, {
      ...therapistData,
      updatedAt: new Date()
    });
  } catch (error: any) {
    throw new Error('Failed to update therapist: ' + error.message);
  }
}

// Delete therapist
export async function deleteTherapist(id: string): Promise<void> {
  if (!db) throw new Error('Database not initialized');
  
  try {
    await deleteDoc(doc(db, 'therapists', id));
  } catch (error: any) {
    throw new Error('Failed to delete therapist: ' + error.message);
  }
}

// Get all therapists from Firestore
export async function getAllTherapists(): Promise<Therapist[]> {
  if (!db) throw new Error('Database not initialized');
  
  try {
    const querySnapshot = await getDocs(collection(db, 'therapists'));
    const therapists: Therapist[] = [];
    
    querySnapshot.forEach((doc) => {
      therapists.push({
        id: doc.id,
        ...doc.data()
      } as Therapist);
    });
    
    return therapists;
  } catch (error: any) {
    throw new Error('Failed to fetch therapists: ' + error.message);
  }
}

// Get single therapist
export async function getTherapist(id: string): Promise<Therapist | null> {
  if (!db) throw new Error('Database not initialized');
  
  try {
    const docRef = doc(db, 'therapists', id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      } as Therapist;
    }
    
    return null;
  } catch (error: any) {
    throw new Error('Failed to fetch therapist: ' + error.message);
  }
}

