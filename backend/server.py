from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://kwatts:password@localhost:5432/movieSlate'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

#Define Models

class Ranked(db.Model):
    __tablename__ = 'ranked'
    movie_id = db.Column(db.Integer, primary_key=True)
    movie_title = db.Column(db.String(255))
    poster = db.Column(db.string(255))
    release_year = db.Column(db.String(255))
    description = db.Column(db.Text)
    banner = db.Column(db.String(255))


