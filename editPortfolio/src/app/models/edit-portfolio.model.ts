export class Membre {
    id!:number;
    nom!: string;
    prenom!: string;
    prenom_usuel!: string;
    user_github?: string;
    user_github_pic?: string;
    tel1!: string;
    tel2?: string;
    mail!: string;
    date_d_adhesion?: string;
    facebook?: string;
    linkedin?: string;
    cv?: string;
    adresse?: string;
    description?: string;
    fonction?: string;
    pdc?: string;
    dark?: number;
}

export class MembreUpdate {
    user_github!: string;
    tel1!: string;
    tel2!: string;
    mail!: string;
    facebook!: string;
    linkedin!: string;
    cv!:string;
    adresse!: string;
    description!: string;
    fonction!: string;
    pdc!: string;
    dark!:string;
}

export class PasswordUpdate {
    lastPassword!: string;
    newPassword!: string;
    confirmPassword!: string;
}
