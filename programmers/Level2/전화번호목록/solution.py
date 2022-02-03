def solution(phone_book):
  answer = True
  PHONE_LEN = len(phone_book)
  phone_book.sort(reverse=True)
  phoneHEAD = {}
  for i in range(PHONE_LEN):
    if phone_book[i] in phoneHEAD:
      answer = False
      break
    key = ''
    for j in range(len(phone_book[i])):
      key+=phone_book[i][j]
      phoneHEAD[key]=True
  return answer
def solution(phoneBook):
  phoneBook.sort()
  for p1, p2 in zip(phoneBook, phoneBook[1:]):
    if(p1[0]!=p2[0]):
      continue
    if p2.startswith(p1):
      return False
  return True
print(solution(["119", "97674223", "1195524421"]))#false
print(solution(["123", "456", "789"]))#true
print(solution(	["12", "123", "1235", "567", "88"]))#false