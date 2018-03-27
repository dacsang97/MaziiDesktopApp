/* tslint-disable */
import * as React from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import SendIcon from 'material-ui-icons/Send';

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

const style = theme => ({
  root: {
    position: 'relative',
    overflow: 'auto',
    maxHeight: '85vh',
    width: '100%',
    maxWidth: 360
  } as React.CSSProperties,
  listContainer: {
    backgroundColor: theme.palette.background.paper
  }
});

class Category extends React.PureComponent<any> {
  render() {
    const { classes } = this.props;
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
            {categories.map(category => (
              <ListItem button={true}>
                <ListItemText primary={category} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(style)(Category);
