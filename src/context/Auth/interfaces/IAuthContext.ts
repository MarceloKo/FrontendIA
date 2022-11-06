import IUser from "./IUser";

export default interface IAuthContext {
    user: IUser | null;
    signIn: (email:string,password:string) => Promise<boolean>;
    signOut: () => void;
    validateToken: () =>void;

}