import builder = require('builder');
import guard = require('guard');
import harvester = require('harvester');

for (var name in Game.creeps) {
	var creep = Game.creeps[name];
    switch (creep.memory.role) {
    case 'builder':
        builder(creep);
        break;
    case 'guard':
        guard(creep);
        break;
    case 'harvester':
        harvester(creep);
        break;
    }
}
