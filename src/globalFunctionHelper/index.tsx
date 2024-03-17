import { customAlphabet } from 'nanoid';
// generate an uniq ID
const  nanid =  customAlphabet('abcdefghejklmnopkurstvwxyz1234' ,10) ;
export const generateId = () =>   nanid() ;