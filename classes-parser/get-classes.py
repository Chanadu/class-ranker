import json

filein = '/home/chanadu/Folders/CodingThings/Web Dev/Svelte/class-ranker/classes-parser/copy-paste-courses.txt'
fileout = '/home/chanadu/Folders/CodingThings/Web Dev/Svelte/class-ranker/classes-parser/courses.json'

f = open(filein,'r')
filedata = f.read()
f.close()

newdata = filedata.replace('.', '')

remove = [' ' ]
letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

newLines = []
for line in newdata.splitlines():
	for x in line[::-1]:
		if x in remove:   
			line = line[:-1]
		else:
			break
	for x in line[::-1]:
		if x in numbers:   
			line = line[:-1]
		else:
			break
	for x in line[::-1]:
		if x in remove:   
			line = line[:-1]
		else:
			break
	
	if (line[0] == line[1] == ' ' and line[2] != ' ') or ('course offerings' == line.lower()):
		newLines.append(newLines.pop() + ' ' + line.removeprefix(' ').removeprefix(' '))
	elif not ("course list" in line.lower()) and not("key: " in line.lower()):
		newLines.append(line)


newdata = '\n'.join(newLines)
currentCategories = []
classes = []


def isClassID(s):
	if (s[0] in letters) and (s[1] in letters or s[1] == '/') and s[2] in letters and s[3] in numbers:
		return True
	return False

def isClassLevel(s):
    if (s[0] == "(") or s[-1] == ')':
        return True
    return False
def isCategory(s):
	pass

mainCategories = ["Applied Arts", "Communication Arts", "Computer Science, Engineering and Technology Course Offerings", "Fine Arts", "Mathematics", "Multilingual Learning", "Physical Education and Health Education", "Science", "Social Studies"]

for line in newdata.splitlines():
	if line[3] not in numbers and not (line[0] == line[1] == line[2] == ' '):
		isMainCategory = False
		for category in mainCategories:
			if category.lower().replace(' ', '') == line.lower().replace(' ', ''):
				currentCategories = [category]
				isMainCategory = True
				break
		if not isMainCategory:
			if len(currentCategories) == 2:
				currentCategories.pop()
			currentCategories.append(line)
	else:
		splitLine = line.split(' ')
		classIds = []
		classLevels = []
		className = ""
		for x in splitLine:
			if x == ' ' or x == '—' or x == '\u2013' or x == '\u2014' or len(x) == 0:
				continue
			if len(x) >= 6 and isClassID(x):
				classIds.append(x)
				continue
			if isClassLevel(x):
				classLevels.append(x.removeprefix('(').removesuffix(')').removesuffix(','))
				continue
			className += x + " "
		o = {
			"categories": currentCategories.copy(),
			"classIDs": classIds.copy(),
   			"classLevels": classLevels.copy(),
	   		"className": className.removesuffix(' '),				
		}
		classes.append(o)
		
f = open(fileout,'w')
f.write(json.dumps(classes))
# f.write(newdata)
#print(classes)
f.close() 