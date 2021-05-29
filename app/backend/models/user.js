const mongoose = require('../database');

const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
        maxlength: 50,
    },
    sobrenome: {
        type: String,
        require: true,
        maxlength: 100,
    },
    email: {
        type: String, 
        required: true, 
        unique: true,
    },
    fone: {
        type: String, 
        required: false, 
        default: '00000000',
    },
    senha: {
        type: String,
        required: true,
        select: false,
    },
    senhaResetToken: {
        type: String,
        select: false,
    },
    senhaResetExpires: {
        type: Date,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;

    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;