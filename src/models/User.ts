type UserOptions = {
  id: string;
  name: string;
  username: string;
  icon: string;
};

export class User {
  id: string;
  name: string;
  username: string;
  icon: string;

  constructor(props: UserOptions) {
    this.id = props.id;
    this.name = props.name;
    this.username = props.username;
    this.icon = props.icon;
  }
}
