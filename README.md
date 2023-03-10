Claims api:

Get:


localhost:8089/u1                                            [get claims under userid 1]

localhost:8089/claims                                        [get all the claims present] 
 
localhost:8089/claims?status=COMPLETED                       [get all the claims in COMPLETED Status]

localhost:8089/c1                                            [get claim with claimnumber 1]


Post:

localhost:8089/claims with claim as a json object in body    [create claim with claimnumber being generated using current date & time]

Put:

localhost:8089/claims/1                                      [update claim number 1]

Delete:

localhost:8089/claims/1                                      [delete claim number 1]



Documents api:

localhost:8089/docu/1                                         [fetch all documents for claim number1]


