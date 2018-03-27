import * as React from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { withStyles, WithStyles, Theme } from 'material-ui/styles';
import SendIcon from 'material-ui-icons/Send';
import classNames from 'classnames';

export const categories = [
  'Chào hỏi',
  'Hội thoại',
  'Số đếm',
  'Ngày tháng',
  'Phương hướng',
  'Giao thông',
  'Chỗ ở',
  'Ăn uống',
  'Mua sắm',
  'Màu sắc',
  'Thành phố',
  'Tên nước',
  'Du lịch',
  'Gia đình',
  'Hẹn hò',
  'Khẩn cấp',
  'Đau ốm',
  'Thành ngữ'
];

const style = (theme: Theme) => ({
  root: {
    position: 'sticky',
    overflow: 'auto',
    maxHeight: '85vh',
    width: '100%',
    maxWidth: 360
  } as React.CSSProperties,
  listContainer: {
    backgroundColor: theme.palette.background.paper
  },
  listItemActive: {
    backgroundColor: theme.palette.primary.light
  }
});

interface Prop {
  current: number;
  onCatChange: Function;
}

type PropsWithStyles = Prop &
  WithStyles<'root' | 'listContainer' | 'listItemActive'>;

class Category extends React.PureComponent<PropsWithStyles> {
  render() {
    const { classes, current } = this.props;
    return (
      <Card className={classes.root}>
        <CardContent>
          <List
            className={classes.listContainer}
            component="nav"
            subheader={
              <ListSubheader component="div">
                1000 mẫu câu giao tiếp
              </ListSubheader>
            }
          >
            {categories.map((category, i) => (
              <ListItem
                key={`category_row_${i}`}
                button={true}
                className={classNames(i === current && classes.listItemActive)}
                onClick={() => {
                  this.props.onCatChange(i);
                }}
              >
                <ListItemText primary={category} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(style, { withTheme: true })(Category);
