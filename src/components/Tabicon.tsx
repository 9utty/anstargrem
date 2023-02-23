import React from "react";
import { Badge } from "./Badge";
import { Icon, IconName } from "./Icons";

export const TabIcon: React.FC<{
  visibleBadge: boolean;
  iconName: IconName;
  iconColor: string;
  iconSize: number;
}> = (props) => {
  if (props.visibleBadge) {
    return (
      <Badge>
        <Icon
          name={props.iconName}
          size={props.iconSize}
          color={props.iconColor}
        />
      </Badge>
    );
  }
  return (
    <Icon
      name={props.iconName} //
      size={props.iconSize} //
      color={props.iconColor} //
    />
  );
};
