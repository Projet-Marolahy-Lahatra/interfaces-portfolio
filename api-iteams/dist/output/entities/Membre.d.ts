import { Competences } from "./Competences";
import { Experiences } from "./Experiences";
import { Fonction } from "./Fonction";
import { Formations } from "./Formations";
export declare class Membre {
    id: number;
    nom: string;
    prenom: string;
    prenomUsuel: string | null;
    userGithub: string | null;
    userGithubPic: string | null;
    tel1: string | null;
    tel2: string | null;
    mail: string;
    dateDAdhesion: string;
    facebook: string | null;
    linkedin: string | null;
    actif: string | null;
    cv: string | null;
    adresse: string | null;
    description: string | null;
    fonction: string | null;
    password: string | null;
    pdc: string | null;
    dark: boolean;
    pointExperience: number | null;
    role: "admin" | "user";
    competences: Competences[];
    experiences: Experiences[];
    fonctions: Fonction[];
    formations: Formations[];
}
