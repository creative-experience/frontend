export class User{

  public id: number;
  public email?: string;
  public password?: string;
  public authStatus?: string;


  constructor({ id, email, password, authStatus}:
    { id?: number; email?: string; password?: string; authStatus?: string; } = {}) {
        this.id = id || 0;
        this.email = email || '';
        this.password = password || '';
        this.authStatus = authStatus || '';
  }


}
