const exampleTransactions = [
    {
        'id': '#10101010',
        'result': 'Success',
        'date': 'Created on 22 July 2024',
        'name': 'HoneyPot Project',
        'address': '0x005ba...155',
        'hash': '0x005ba...155',
        'approvers': 3,
        'signatures': 1,
        'value': 900
    },
    {
        'id': '#10101010',
        'result': 'Failed',
        'date': 'Created on 23 July 2024',
        'name': 'HoneyPot Project',
        'address': '0x005ba...155',
        'hash': '0x005ba...155',
        'approvers': 3,
        'signatures': 1,
        'value': 400
    },
    {
        'id': '#10101010',
        'result': 'Pending',
        'date': 'Created on 24 July 2024',
        'name': 'HoneyPot Project',
        'address': '0x005ba...155',
        'hash': '0x005ba...155',
        'approvers': 3,
        'signatures': 1,
        'value': 500
    },
    {
        'id': '#10101010',
        'result': 'Success',
        'date': 'Created on 25 July 2024',
        'name': 'HoneyPot Project',
        'address': '0x005ba...155',
        'hash': '0x005ba...155',
        'approvers': 3,
        'signatures': 1,
        'value': 200
    },
    {
        'id': '#10101010',
        'result': 'Success',
        'date': 'Created on 26 July 2024',
        'name': 'HoneyPot Project',
        'address': '0x005ba...155',
        'hash': '0x005ba...155',
        'approvers': 3,
        'signatures': 1,
        'value': 200
    },
    {
        'id': '#10101010',
        'result': 'Success',
        'date': 'Created on 27 July 2024',
        'name': 'HoneyPot Project',
        'address': '0x005ba...155',
        'hash': '0x005ba...155',
        'approvers': 3,
        'signatures': 1,
        'value': 200
    },
    {
        'id': '#10101010',
        'result': 'Success',
        'date': 'Created on 28 July 2024',
        'name': 'HoneyPot Project',
        'address': '0x005ba...155',
        'hash': '0x005ba...155',
        'approvers': 3,
        'signatures': 1,
        'value': 200
    },
]

const reviewerOptions = [
    {
        label: '1',
        value: 1
    },
    {
        label: '2',
        value: 2
    },
    {
        label: '3',
        value: 3
    },
    {
        label: '4',
        value: 4
    },
    {
        label: '5',
        value: 5
    }
]

const exampleJoinData = [
    {
        'id': '#1010101',
        'name': 'HoneyPot',
        'sender': '0x4DfB2F6d16A8CB217b391ce2A731433d769Ef859',
        'recipient': '0x4DfB2F6d16A8CB217b391ce2A731433d769Ef859',
        'reviews': [
            '0x3bBdBF48f5ff97A9C967B48d8512870612419f77',
            '0x3bBdBF48f5ff97A9C967B48d8512870612419f77',
            // '0x3bBdBF48f5ff97A9C967B48d8512870612419f77',
            // '0x3bBdBF48f5ff97A9C967B48d8512870612419f77',
            // '0x3bBdBF48f5ff97A9C967B48d8512870612419f77',
            // '0x3bBdBF48f5ff97A9C967B48d8512870612419f77',
            // '0x3bBdBF48f5ff97A9C967B48d8512870612419f77',
        ],
        'totalAssets': 900
    }
]
export { exampleTransactions, reviewerOptions, exampleJoinData };