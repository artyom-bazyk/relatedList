export default class RelatedListNavigation {

    navigateToRelatedList (navigation, recId) {
        navigation({
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId: recId,
                objectApiName: 'Account',
                relationshipApiName: 'Contacts',
                actionName: 'view'
            },
        });
    }

}