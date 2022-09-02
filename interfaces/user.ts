import mongoose from 'mongoose';

export interface IUser {
    username: string,
    email: string,
    password: string,
    since: Date,
    _id: mongoose.ObjectId,
    admin: boolean,
}

export interface ISession {
    isLoggedIn: boolean;
    token: string;
    username: string,
    email: string,
    password: string,
    since: Date,
    _id: mongoose.ObjectId,
    admin: boolean,

}

export interface IJwt {
    email: string,
    password: string,
    id: mongoose.ObjectId,
    admin: boolean,
}