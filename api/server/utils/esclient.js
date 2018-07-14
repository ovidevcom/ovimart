const elasticsearch = require('elasticsearch')

const client = new elasticsearch.Client({
  host: '45.77.174.231:9200',
  log: 'error'
})

module.exports = {
  client: () => client
}
