# NoSQL Tutorial

This tutorial will guide you through the NoSQL concepts. We will use a real-world scenario of managing a social media platform to highlight some of the database design concepts.

## Setting Up MongoDB

Before we start, make sure you have MongoDB installed on your machine. If not, you can download it from the official MongoDB website.

## Creating a Database

First, we need to create a database for our social media platform. In MongoDB, you can create a database using the `use` command.

```javascript
use SocialMedia;
```

## Creating Collections

In our social media platform, we will have two collections: `Users` and `Posts`. 

```javascript
db.createCollection('Users');
db.createCollection('Posts');
```

## Inserting Documents

Let's insert some documents into our collections.

```javascript
db.Users.insert({
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password123'
});

db.Posts.insert({
    userId: 'userId1',
    content: 'This is my first post!',
    likes: 0,
    comments: []
});
```

## Querying Documents

You can retrieve documents from your collections using the `find` method.

```javascript
db.Users.find();

db.Posts.find();
```

## Updating Documents

You can update documents in your collections using the `update` method.

```javascript
db.Users.update(
    { name: 'John Doe' },
    { $set: { email: 'john.new@example.com' } }
);
```

## Deleting Documents

You can delete documents from your collections using the `remove` method.

```javascript
db.Users.remove({ name: 'John Doe' });
```

## Indexing

Creating an index can help speed up retrieval of documents. Let's create an index on the `name` field of the `Users` collection.

```javascript
db.Users.createIndex({ name: 1 });
```

## Aggregation

MongoDB provides a powerful aggregation framework. Let's use it to count the number of posts by each user.

```javascript
db.Posts.aggregate([
    { $group: { _id: "$userId", count: { $sum: 1 } } }
]);
```

## Advanced Queries

Now that we've covered the basics, let's move on to some advanced MongoDB queries.

### Querying Nested Fields

In MongoDB, you can query nested fields using dot notation. Let's find all posts with at least one comment.

```javascript
db.Posts.find({ "comments.0": { $exists: true } });
```

### Querying with Regular Expressions

MongoDB supports regular expressions for pattern matching. Let's find all users with a Gmail address.

```javascript
db.Users.find({ email: { $regex: /@gmail\.com$/ } });
```
That's it! You have now learned both the basics and some advanced concepts of NoSQL using MongoDB. Practice these concepts to get a better understanding. Happy learning!


Here are some additional resources that you might find helpful:

1. [MongoDB Official Documentation](https://docs.mongodb.com/manual/introduction/)
2. [MongoDB University](https://university.mongodb.com/)
3. [NoSQL Databases: An Overview](https://www.ibm.com/cloud/learn/nosql-databases)
4. [NoSQL vs SQL — Which Database Is Better For Big Data Applications](https://towardsdatascience.com/nosql-vs-sql-which-database-is-better-for-big-data-applications-9a7395198b5a)
5. [MongoDB Tutorial for Beginners](https://www.guru99.com/mongodb-tutorials.html)
6. [MongoDB - Indexing](https://www.tutorialspoint.com/mongodb/mongodb_indexing.htm)
7. [MongoDB - Aggregation](https://www.tutorialspoint.com/mongodb/mongodb_aggregation.htm)

Remember, the best way to learn is by doing. Try to apply what you learn from these resources in your own projects. Happy learning!


