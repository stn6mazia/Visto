/* eslint-env node */
/* eslint-disable no-console */

const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const Boom = require('boom');
const HapiSwagger = require('hapi-swagger');
const Joi = require('joi');
const Nedb = require('nedb');

const server = new Hapi.Server();

const Contacts = new Nedb({
    filename: '.messages.json',
    autoload: true,
});

const Swagger = {
    register: HapiSwagger,
};

server.connection({
    host: 'localhost',
    port: 3001,
    routes: {
        cors: true,
    },
});

server.register([
    Inert,
    Vision,
    Swagger,
], (moduleError) => {
    if (moduleError) {
        console.error('Failed to load a module:', moduleError);
    }

    server.start(() => {
        server.route({
            method: 'GET',
            path: '/messages',
            handler: (request, reply) => Contacts
                .find({}, (err, docs) => {
                    if (err) {
                        return reply(Boom.badImplementation(err));
                    }

                    if (!docs) {
                        return reply(Boom.notFound());
                    }

                    return reply(docs);
                }),
            config: {
                tags: ['api'],
                description: 'List all messages',
                response: {
                    schema: Joi.array().items(Joi.object({
                        _id: Joi.string().required(),
                        name: Joi.string().required(),
                        email: Joi.string().email().required(),
                        message: Joi.string().required(),
                        metadata: Joi.object(),
                    })),
                },
            },
        });

        server.route({
            method: 'POST',
            path: '/messages',
            handler: (request, reply) => Contacts
                .insert({
                    name: request.payload.name,
                    email: request.payload.email,
                    message: request.payload.message,
                    metadata: request.payload.metadata,
                }, (err, newDoc) => {
                    if (err) {
                        return reply(Boom.badImplementation(err));
                    }

                    return reply(newDoc).code(201);
                }),
            config: {
                tags: ['api'],
                description: 'Adds message',
                validate: {
                    payload: {
                        name: Joi.string().required(),
                        email: Joi.string().email().required(),
                        message: Joi.string().required(),
                        metadata: Joi.object(),
                    },
                },
                response: {
                    schema: {
                        _id: Joi.string().required(),
                        name: Joi.string().required(),
                        email: Joi.string().email().required(),
                        message: Joi.string().required(),
                        metadata: Joi.object(),
                    },
                },
            },
        });

        server.route({
            method: 'GET',
            path: '/messages/{id}',
            handler: (request, reply) => Contacts
                .findOne({ _id: request.params.id }, (err, doc) => {
                    if (err) {
                        return reply(Boom.badImplementation(err));
                    }

                    if (!doc) {
                        return reply(Boom.notFound());
                    }

                    return reply(doc);
                }),
            config: {
                tags: ['api'],
                description: 'Get message',
                validate: {
                    params: {
                        id: Joi.string().required(),
                    },
                },
                response: {
                    schema: {
                        _id: Joi.string().required(),
                        name: Joi.string().required(),
                        email: Joi.string().email().required(),
                        message: Joi.string().required(),
                        metadata: Joi.object(),
                    },
                },
            },
        });

        server.route({
            method: 'PUT',
            path: '/messages/{id}',
            handler: (request, reply) => Contacts
                .update({ _id: request.params.id }, request.payload, {}, (err) => {
                    if (err) {
                        return reply(Boom.badImplementation(err));
                    }

                    return reply().code(204);
                }),
            config: {
                tags: ['api'],
                description: 'Replaces message',
                validate: {
                    params: {
                        id: Joi.string().required(),
                    },
                    payload: {
                        name: Joi.string().required(),
                        email: Joi.string().email().required(),
                        message: Joi.string().required(),
                        metadata: Joi.object(),
                    },
                },
            },
        });

        server.route({
            method: 'PATCH',
            path: '/messages/{id}',
            handler: (request, reply) => Contacts
                .update({ _id: request.params.id }, { $set: request.payload }, {}, (err) => {
                    if (err) {
                        return reply(Boom.badImplementation(err));
                    }

                    return reply().code(204);
                }),
            config: {
                tags: ['api'],
                description: 'Changes message',
                validate: {
                    params: {
                        id: Joi.string().required(),
                    },
                    payload: {
                        name: Joi.string(),
                        email: Joi.string().email(),
                        message: Joi.string(),
                        metadata: Joi.object(),
                    },
                },
            },
        });

        server.route({
            method: 'DELETE',
            path: '/messages/{id}',
            handler: (request, reply) => Contacts
                .remove({ _id: request.params.id }, {}, (err) => {
                    if (err) {
                        return reply(Boom.badImplementation(err));
                    }

                    return reply().code(204);
                }),
            config: {
                tags: ['api'],
                description: 'Removes message',
                validate: {
                    params: {
                        id: Joi.string().required(),
                    },
                },
            },
        });

        console.log('Server running at:', server.info.uri);
    });
});
