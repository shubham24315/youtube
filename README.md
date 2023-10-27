Debouncing: 


typing slow= 200ms
typing fast = 30ms

Perfomance:
 - iphone pro max = 14 letter words = 14 API calls
 - with debouncing 3 API calls

 Debouncing with 200ms
  - if difference between 2 keystroke is less than 200ms - DECLINE API calls
  - if it is greater than 200ms make an API Call