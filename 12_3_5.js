//document ��ü�� ������� �̺�Ʈ �����ʸ� �߰��մϴ�.
//�̺�Ʈ ������ "DOMContentLoaded" �Դϴ�.
document.addEventListener("DOMContentLoaded",
    // �̺�Ʈ �ڵ鷯�Դϴ�.
    // HTMl �ڵ尡 �θ��� ���� �񵿱������� ������ �۾����Դϴ�.
    function(e){
        //input �±׸� ã�� button ������ �����մϴ�.
        let button = document.querySelector("input")
        //button ������ �̺�Ʈ �����ʸ� �߰��մϴ�.
        //�̺�Ʈ ������ "input"�Դϴ�.
        button.addEventListener("input",
            function(e){
                //�ֿܼ� �Է�â�� ���� ����մϴ�.
                console.log(e.target.value)
            }
        )
    }
)

// <p> �±׿��� �ζ��� �̺�Ʈ �𵨷� ȣ���� �Լ��� �����մϴ�.
// �Լ��� �̸��� hi�Դϴ�.
function hi(){
    // alert()�� ��� "hi"��� ���ڸ� ����մϴ�.
    alert("hi")
}