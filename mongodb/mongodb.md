## Mongodb

1. show dbs
2. Use Student => create db

## CRUD
```html
C => Create 
R => Read
U => Update
D => Delete
```

## Insert 

### insertOne
```html
db.<collection>.insertOne({})
```

### insertMany
```html
db.<collection>.([{},{},{}])
```

## Read 

```html
find() => find multiple record 
findOne() => find One record 
find({object}) => match condition
```

## update

```html
db.<collection>.update(
    {condition},
    $set: { }
)
```
```html
db.<collection>.update(
    {condition},
    {
        $set: {update value}
    }
)
```

## Delete

```html
db.deleteOne({})
db.deleteMany({},{})
```