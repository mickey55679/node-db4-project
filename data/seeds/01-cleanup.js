const { clean } = require('knex-cleaner')

exports.seed = function (knex) {
    return clean(knex, {
        node: 'truncate',
        ignoreTables: ['knex_migrations', 'knex_migration_lock'],
    })
}