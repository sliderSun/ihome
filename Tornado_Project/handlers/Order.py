#coding=utf-8
_author_ = 'Administrator'
from .BaseHandler import BaseHandler
from utils.common import require_logined
class OrderHandler(BaseHandler):
    @require_logined
    def get(self):
        user_id=self.session.data["user_id"]
        house_id = self.json_args.get("house_id")
        start_date =self.json_args.get("start_date")
        end_date = self.json_args.get("end_date")

