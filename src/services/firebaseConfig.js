import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAYRbsX-_XiIOjUGzhGX4mHwkw12c6Xw4s',
  authDomain: 'driventauth.firebaseapp.com',
  projectId: 'driventauth',
  storageBucket: 'driventauth.appspot.com',
  messagingSenderId: '64233838210',
  appId: '1:64233838210:web:1fd8f2ff48dd3b7a30069b',
  measurementId: 'G-HRG6VSVT57',
};

export const app = initializeApp(firebaseConfig);
