import { MongoClient } from "mongodb"

const client = new MongoClient("mongodb://localhost:27017/?directConnection=true")
const db = client.db('acta')
const viewsCollection = db.collection('views')

var views: number = 0

const addView = async () => {
  try {
    var result = await viewsCollection.insertOne({})
    views = await viewsCollection.countDocuments()
		return views
  } catch (err) {
    console.log(err)
		return err
  }
}

export default addView
