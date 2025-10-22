import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  User as FirebaseUser
} from 'firebase/auth';
import { auth, isFirebaseConfigured } from './firebase';

// Check if Firebase is available
function checkFirebase() {
  if (!isFirebaseConfigured()) {
    throw new Error('Firebase is not configured. Please contact the administrator to set up authentication.');
  }
  if (!auth) {
    throw new Error('Authentication service is not available. Please try again later.');
  }
}

export interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

// Register new user
export async function registerUser(email: string, password: string, name: string): Promise<AuthUser> {
  checkFirebase();
  
  try {
    const userCredential = await createUserWithEmailAndPassword(auth!, email, password);
    const user = userCredential.user;
    
    // Update profile with display name
    await updateProfile(user, {
      displayName: name
    });
    
    return {
      uid: user.uid,
      email: user.email,
      displayName: name,
      photoURL: user.photoURL
    };
  } catch (error: any) {
    throw new Error(getAuthErrorMessage(error.code));
  }
}

// Login user
export async function loginUser(email: string, password: string): Promise<AuthUser> {
  checkFirebase();
  
  try {
    const userCredential = await signInWithEmailAndPassword(auth!, email, password);
    const user = userCredential.user;
    
    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };
  } catch (error: any) {
    throw new Error(getAuthErrorMessage(error.code));
  }
}

// Logout user
export async function logoutUser(): Promise<void> {
  checkFirebase();
  
  try {
    await signOut(auth!);
  } catch (error: any) {
    throw new Error('Failed to logout. Please try again.');
  }
}

// Reset password
export async function resetPassword(email: string): Promise<void> {
  checkFirebase();
  
  try {
    await sendPasswordResetEmail(auth!, email);
  } catch (error: any) {
    throw new Error(getAuthErrorMessage(error.code));
  }
}

// Google Sign In
export async function signInWithGoogle(): Promise<AuthUser> {
  checkFirebase();
  
  try {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth!, provider);
    const user = userCredential.user;
    
    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };
  } catch (error: any) {
    throw new Error(getAuthErrorMessage(error.code));
  }
}

// GitHub Sign In
export async function signInWithGitHub(): Promise<AuthUser> {
  checkFirebase();
  
  try {
    const provider = new GithubAuthProvider();
    const userCredential = await signInWithPopup(auth!, provider);
    const user = userCredential.user;
    
    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };
  } catch (error: any) {
    throw new Error(getAuthErrorMessage(error.code));
  }
}

// Get current user
export function getCurrentUser(): FirebaseUser | null {
  return auth?.currentUser || null;
}

// Helper function to get user-friendly error messages
function getAuthErrorMessage(errorCode: string): string {
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return 'This email is already registered. Please login instead.';
    case 'auth/invalid-email':
      return 'Invalid email address.';
    case 'auth/operation-not-allowed':
      return 'Operation not allowed. Please contact support.';
    case 'auth/weak-password':
      return 'Password is too weak. Please use at least 6 characters.';
    case 'auth/user-disabled':
      return 'This account has been disabled. Please contact support.';
    case 'auth/user-not-found':
      return 'No account found with this email. Please register.';
    case 'auth/wrong-password':
      return 'Incorrect password. Please try again.';
    case 'auth/too-many-requests':
      return 'Too many failed attempts. Please try again later.';
    case 'auth/network-request-failed':
      return 'Network error. Please check your connection.';
    case 'auth/popup-closed-by-user':
      return 'Sign-in popup was closed. Please try again.';
    default:
      return 'An error occurred. Please try again.';
  }
}

