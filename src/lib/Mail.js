import nodemailer from "nodemailer";
import emailConfig from "../config/mail"

export default nodemailer.createTransport(emailConfig)