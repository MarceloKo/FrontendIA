export default interface IAlert {
    type: 'success' | 'error' | 'info' | 'warning' | undefined;
    message: string;
}