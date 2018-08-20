import React from 'react';

import { getEntityPrefix, getEntityId } from './entityApi';
import Context from './Context';
import IdentityAvatar, { AvatarPlaceholder } from './Avatar';
import StyledLink from './Link';

export const IfOnMainnet = ({ children, then, other }) => (
  <Context.Consumer>
    {({ web3Store: { networkName }, appStore: { http } }) =>
      !http && networkName === 'ethereum' ? then || children : null
    }
  </Context.Consumer>
);

export const IfActiveEntity = ({ children, then, other }) => (
  <Context.Consumer>
    {({ entityStore: { activeEntity } }) =>
      activeEntity ? (then && then(activeEntity.id)) || children(activeEntity.id) : other || null
    }
  </Context.Consumer>
);

export const IfIsActiveEntity = ({ id, children, then, other }) => (
  <Context.Consumer>
    {({ entityStore: { activeEntity } }) => (activeEntity && activeEntity.id === id ? then || children : other || null)}
  </Context.Consumer>
);

export const IfOwnerOfEntity = ({ id, children, then, other }) => (
  <Context.Consumer>
    {({ entityStore: { myEntities } }) =>
      !!myEntities.find(({ id: myId }) => id.toString() === myId) ? then || children : other || null
    }
  </Context.Consumer>
);

export const Entity = ({ id, children }) => (
  <Context.Consumer>{({ entityStore: { getEntity } }) => children(getEntity(id))}</Context.Consumer>
);

export const EntityName = ({ id }) => {
  return (
    <Context.Consumer>
      {({ entityStore: { getEntity } }) => {
        return getEntity(id).name || `${getEntityPrefix(id)}${getEntityId(id)}`;
      }}
    </Context.Consumer>
  );
};

export const EntityAvatar = ({ id, entityInfo, ...props }) => {
  if (!!entityInfo) {
    const { background_color, image_preview_url } = entityInfo;
    return <IdentityAvatar entity={id} {...props} backgroundColor={`#${background_color}`} src={image_preview_url} />;
  }

  return (
    <Context.Consumer>
      {({ entityStore: { getEntity } }) =>
        id ? (
          <IdentityAvatar
            entity={id}
            {...props}
            backgroundColor={`#${getEntity(id).background_color}`}
            src={getEntity(id).image_preview_url}
          />
        ) : (
          <AvatarPlaceholder entity={id} {...props} />
        )
      }
    </Context.Consumer>
  );
};

export const LinkedEntityAvatar = ({ id, entityInfo, ...props }) => {
  if (!!entityInfo) {
    const { background_color, image_preview_url } = entityInfo;

    return (
      <StyledLink to={`/${id}`}>
        <IdentityAvatar entity={id} {...props} backgroundColor={`#${background_color}`} src={image_preview_url} />
      </StyledLink>
    );
  }

  return (
    <Context.Consumer>
      {({ entityStore: { getEntity } }) => (
        <StyledLink to={`/${id}`}>
          <IdentityAvatar
            entity={id}
            {...props}
            backgroundColor={`#${getEntity(id).background_color}`}
            src={getEntity(id).image_preview_url}
          />
        </StyledLink>
      )}
    </Context.Consumer>
  );
};

export const Entities = ({ children }) => (
  <Context.Consumer>
    {({ entityStore: { myEntities, changeActiveEntityTo } }) => {
      // const entities = myEntities.map((myEntity) => getEntity(myEntity));
      return children({ entities: myEntities, changeActiveEntityTo });
    }}
  </Context.Consumer>
);

export const ActiveEntityName = () => (
  <Context.Consumer>{({ entityStore: { activeEntity } }) => activeEntity.name}</Context.Consumer>
);

export const LinkedActiveEntityName = () => (
  <Context.Consumer>
    {({ entityStore: { activeEntity } }) => (
      <StyledLink to={`/${activeEntity.id}`}>
        <ActiveEntityName />
      </StyledLink>
    )}
  </Context.Consumer>
);

export const LinkedActiveEntityAvatar = (props) => (
  <Context.Consumer>
    {({
      entityStore: {
        activeEntity: { id, ...entityInfo },
      },
    }) => <LinkedEntityAvatar id={id} entityInfo={entityInfo} {...props} />}
  </Context.Consumer>
);

export const ActiveEntityAvatar = (props) => (
  <Context.Consumer>
    {({
      entityStore: {
        activeEntity: { id, ...entityInfo },
      },
    }) => <EntityAvatar id={id} entityInfo={entityInfo} {...props} />}
  </Context.Consumer>
);

export const IfActiveEntityLiked = ({ reactions, children, liked, notLiked, unActive }) => (
  <Context.Consumer>
    {({ entityStore: { activeEntity } }) => {
      if (!activeEntity) return unActive;
      const entityHasLiked =
        reactions &&
        reactions.find(
          ({ context, author, isFromAddress }) =>
            isFromAddress ? author === activeEntity.id : context === activeEntity.id,
        );
      return entityHasLiked ? liked || children : notLiked;
    }}
  </Context.Consumer>
);

export const DoesActiveEntityHasToken = ({ asset, children }) => (
  <Context.Consumer>
    {({ entityStore: { activeEntity, getEntity } }) => {
      if (!activeEntity) return children(false);
      const hasToken = getEntity(activeEntity.id).tokens.indexOf(asset) !== -1;
      return children(hasToken);
    }}
  </Context.Consumer>
);

export const IfActiveEntityHasToken = ({ asset, children, then, other }) => (
  <Context.Consumer>
    {({ entityStore: { activeEntity, getEntity } }) => {
      if (!activeEntity) return other;
      const hasToken = getEntity(activeEntity.id).tokens.indexOf(asset) !== -1;
      return hasToken ? then || children : other;
    }}
  </Context.Consumer>
);

export const IfActiveEntityIs = ({ asset, children, then, other }) => (
  <Context.Consumer>
    {({ entityStore: { activeEntity } }) => {
      if (!activeEntity) return other;
      const [network, address] = activeEntity.id.split(':');
      const is = `${network}:${address}` === asset;
      return is ? then || children : other;
    }}
  </Context.Consumer>
);

export const IsActiveEntityFromFamily = ({ asset, children }) => (
  <Context.Consumer>
    {({ entityStore: { activeEntity } }) => {
      if (!activeEntity) return children(false);
      const [network, address] = activeEntity.id.split(':');
      const is = `${network}:${address}` === asset;
      return children(is);
    }}
  </Context.Consumer>
);
