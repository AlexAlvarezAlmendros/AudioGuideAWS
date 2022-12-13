import json

#Ordered Reference
referenceJsonFile = open('spnContent.json', encoding='utf-8')

referenceJsonData = referenceJsonFile.read()

OrderedObj = json.loads(referenceJsonData)
FinalObj = OrderedObj

#DisOrdered Reference
JsonFile = open('engContent.json', encoding='utf-8')

JsonData = JsonFile.read()

DisOrdered = json.loads(JsonData)

#Floor1
index = 0
for x in OrderedObj['ES']['Floor1']:
  for y in DisOrdered['ES']['Floor1']:
      if x['image'] == y['image']:
        FinalObj['ES']['Floor1'][index]['shortDesc'] = y['shortDesc']
        break
  index += 1

#Floor2
index2 = 0
for x in OrderedObj['ES']['Floor2']:
  for y in DisOrdered['ES']['Floor1']:
      if x['image'] == y['image']:
        FinalObj['ES']['Floor2'][index2]['shortDesc'] = y['shortDesc']
        break
  index2 += 1


#Floor3
index3 = 0
for x in OrderedObj['ES']['Floor3']:
  for y in DisOrdered['ES']['Floor1']:
      if x['image'] == y['image']:
        FinalObj['ES']['Floor3'][index3]['shortDesc'] = y['shortDesc']
        break
  index3 += 1


json_object = json.dumps(FinalObj, indent=4)
with open("3.json", "w") as outfile:
    outfile.write(json_object)

print(FinalObj['ES']['Floor1'])


