import json
import urllib2
import sys

pokemon = {};

for index in range(1,151):
	sys.stdout.write("Pokemon #" + str(index) + " is ")
	pokemon[index] = json.loads(urllib2.urlopen("http://pokeapi.co/api/v1/pokemon/" + str(index) + "/").read());
	print pokemon[index]['name']

with open('pokemon.txt', 'w') as outfile:
    json.dump(pokemon, outfile)