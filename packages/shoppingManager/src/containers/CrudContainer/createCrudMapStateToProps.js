function UNDEFINED_INTERCEPTORS() {
  return {};
}

function getSubSection({ [storeSection]: section = {} }, ownProps) {
  return section[ownProps.entryType] || {};
}

export default function createDropdownMapStateToProps(storeSection) {
  /**
   * ownProps required to have function getEndpoint({ id, ids, method })
   */
  return (state, { interceptors = UNDEFINED_INTERCEPTORS, ...ownProps }) => {
    const subSection = getSubSection(state, ownProps);
    return {
      ...subSection,
      ...interceptors(state[storeSection], subSection, ownProps),
      ...ownProps,
    };
  };
}
