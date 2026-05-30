query to find all studnets who got placed in last 7 days.

const mongoose=require('mongoose');

const users=require('./model/User);

db.find(studnet,
{
    placed:db.get_placed>=7
});